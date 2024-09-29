import { GetServerSideProps } from 'next'
import { IJob } from '../../lib/utils/interface'
import Head from 'next/head'
import React from 'react';
import Navbar from '@/components/home/navbar';
import Search from '@/components/home/search';
import Footer from '@/components/general/footer'
import ReviewContainer from '@/components/home/review/reviewContainer'
import JobContainer from '@/components/job/jobContainer'
// import CategoryContainer from './../components/home/category/CategoryContainer'
// import Jumbotron from './../components/home/Jumbotron'
import axios from 'axios'

export interface ICategories {
  _id: string
  name: string
  count: number
  image: string
}

interface IProps {
  latestJobs: IJob[]
  categories: ICategories[]
}

const Home = ({ latestJobs, categories }: IProps) => {
  return (
    <>
      <Head>
        <title>Job Seek | Home</title>
      </Head>
      <Search/>
      <Navbar />
      <div>
        {/* <Jumbotron />
        <CategoryContainer categories={categories} /> */}
        <JobContainer jobs={latestJobs} />
        <ReviewContainer />
      </div>
      <Footer />
    </>
  )
}

export default Home

// export const getServerSideProps: GetServerSideProps = async(context) => {
//   const res = await axios.get(`${process.env.CLIENT_URL}/api/home`)

//   return {
//     props: {
//       latestJobs: res.data.latestJob,
//       categories: res.data.categoryDisplay
//     }
//   }
// }
