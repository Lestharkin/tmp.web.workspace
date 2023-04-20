export default interface index {
  data: {
    jobs: [
      {
        id: string
        logo: string
        company: string
        job: string
        category: string
        city: string
        published: string
      }
    ]
    cities: [
      { id: string, name: string }
    ]
    pages: number
  }
}
