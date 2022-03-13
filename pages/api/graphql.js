import Cors from 'micro-cors'
import { gql, ApolloServer } from 'apollo-server-micro'

// bodyParser not required for micro
export const config = {
    api: {
        bodyParser: false
    }
}

// stories: GraphQL data
const stories = [
    {
        usid: 'US-12345',
        desc: 'Story 12345',
        pts: 3
    },
    {
        usid: 'US-23412',
        desc: 'Story 23412',
        pts: 5
    }
]

// typeDefs: GraphQL schema
const typeDefs = gql`
    type Story {
        usid: String
        desc: String
        pts: Int
    }

    type Query {
        stories: [Story]
    }
`
// resolvers: GraphQL query handlers
const resolvers = {
    Query: {
        stories: () => stories
    }
}

// cors: protection mechanism for web pages to "safely" load "cross-origin" resources or data
const cors = Cors()

// apollo server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {

    },
    introspection: true,
    playground: true,
})

// start server
const serverStart = apolloServer.start()

// wrap whole export into cors function
export default cors(async(req, res) => {
    if(req.method === 'OPTIONS') {
        res.end()
        return false
    }

    await serverStart
    await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})