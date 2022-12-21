import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '58761609431-3j13utqc9del34g1kn3mklcqemdivcd5.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ]
})