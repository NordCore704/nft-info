import React from 'react'
import { SingleFind, Headers } from '@/exports'

const singleFindNFT = ({ data }) => {
  return (
    <section className='min-h-screen'>
      <Headers />
      <SingleFind data={data}/>
    </section>
  )
}

export default singleFindNFT

export async function getStaticPaths() {
  const {results} = await import("../../../../../constants/search.json");
  const allPaths = results.map((path) => {
    return {
      params: {
        id: path.example_token_id,
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
  const {results} = await import("../../../../../constants/search.json");
  const data = results.filter((data) => path === data.example_token_id)
    return {
      props: { data }
    }
  }