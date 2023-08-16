import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { avatarYellow, blockEther, blockTezos, nftGirlFull } from '@/exports/image-exports'

const TraverseBlocks = () => {
  return (
    <section className='flex flex-col gap-5 items-center justify-center overflow-hidden p-5'>
        <div className="images rounded-lg bg-black relative">
        <Image alt='otherBlockChains' className='rounded-lg' src={blockTezos}/>
        </div>
        <div className="flex gap-3 items-center justify-center w-full overflow-y-hidden">
        <Image alt='ether' className='rounded-md w-[30%] bg-blue-500 hover:w-[35%] transition hover:cursor-pointer' src={blockEther}/>
        <Image alt='nft' src={nftGirlFull} className='rounded-md w-[40%] hover:w-[45%] transition hover:cursor-pointer'/>
        <Image alt='nft-avatar' src={avatarYellow} className='rounded-md w-[30%] hover:w-[35%] transition hover:cursor-pointer'/>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
            <p className='capitalize text-3xl font-semibold text-center'>Traverse Across different Blockchains</p>
            <p className='text-center w-auto lg:w-[60%]'>
                Does your desired blockchain seem rare or not so famous? We can't really fix that but we can get you info about NFTs that exist on that blockchain yes, so long as it actually exists, we got you bro🥷.
            </p>
            <Link href={'/search'} className='hover:bg-scheme-green hover:text-white p-3 text-center w-64 text-lg font-bold rounded-full bg-green-500 duration-300 transition-colors'>See How</Link>
        </div>
    </section>
  )
}

export default TraverseBlocks