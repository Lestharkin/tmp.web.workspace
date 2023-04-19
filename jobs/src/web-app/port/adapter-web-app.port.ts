export default interface AdapterWebAppPort {
  getJobs: (page: number) => Job[]
  getJobsByKeyword: (keyword: string, page: number) => Job[]
  getJobsByCity: (name: string, page: number) => Job[]
  getJobsByZip: (code: string, page: number) => Job[]
  getJobsByCategory: (id: number, page: number) => Job[]
  getJobById: (id: number) => Job | null
}