// 'use client' gives app access to browser storage to find session tokens
'use client'

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layout/layout'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react"
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import  googleIcon  from '../public/google.svg';

export default function Login(){

    // get session for NextAuth
    const { data: session } = useSession();


    const [show, setShow] = useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: '',
        },
        onSubmit
    })


    async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect: false,
            username: values.username,
            callbackUrl: "/"
        })

        if(status.ok) router.push(status.url)
        
    }


    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }

    return (
        <Layout>
        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Welcome</h1>
            </div>

            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
    
                <div className="input-button">
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={googleIcon} width="20" height={20} alt={'Google Icon'} ></Image>
                    </button>
                </div>
    
            </form>

            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link legacyBehavior href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
            </p>
        </section>
        </Layout>
    )
}