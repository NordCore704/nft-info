import React from 'react'
import { SingleNFT } from '@/exports'

const getAllDynamic = ({data}) => {
  return (
    <section className='min-h-screen'>
      <SingleNFT data={data}/>
    </section>
  )
}

export default getAllDynamic


export async function getStaticPaths() {
  const {results} = await import("../../../../../constants/nftsResults.json");
  const allPaths = results.map((path) => {
    return {
      params: {
        id: path.id,
      },
    };
  });


  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context){
    
  const path = context?.params.id
  const {results} = await import("../../../../../constants/nftsResults.json");
  const data = results.filter((data) => path === data.id)
    return {
      props: { data }
    }
  }