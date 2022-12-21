import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Layout from '../layout/layout'
import { signIn, signOut } from "next-auth/react"
import  googleIcon  from '../public/google.svg'
export default function Register(){

    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username : '',
        },
        onSubmit
    })

    async function onSubmit(values){
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/authenticate', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000/create')
            })
    }
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }
    return (
       

        <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
            </div>

            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                    <input 
                    type="text"
                    name='Username'
                    placeholder='Username'
                    className={styles.input_text}
                    {...formik.getFieldProps('username')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiOutlineUser size={25} />
                    </span>
                </div>
       
                <div className="input-button">
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={googleIcon} width="20" height={20} alt={'Google Icon'} ></Image>
                    </button>
                </div>
            </form>
            <p className='text-center text-gray-400 '>
                Have an account? <Link legacyBehavior href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
            </p>
        </section>
        </Layout>
    )
}