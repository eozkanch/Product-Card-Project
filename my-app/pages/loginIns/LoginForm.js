
import React from 'react';
import { Form } from 'react-bootstrap';
import { AiFillFacebook } from 'react-icons/ai';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className="  h-full w-full ">
        <div className=" bg-white text-center border-2 border-gray-200 py-5 ">
          <div className="text-center ">
            <Image
              src="/images/instagram-logo.png"
              width={200}
              height={10}
              alt="Instagram Logo"
              className="w-45 mx-auto mb-6 mt-6 px-2"
            />
          </div>
          <form className="px-10"> 
            <input
              type="text"
              placeholder="Username "
              className="w-full py-2 text-sm px-4 mb-4  rounded focus:outline-none focus:border-gray-400 border-2 border-gray-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 text-sm px-4 mb-4 rounded focus:outline-none focus:border-gray-400 border-2 border-gray-200"
            />
            <Form.Check
              className="mb-4 text-xs text-left"
              type="checkbox"
              id="custom-switch"
              label=" Save login info"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 text-sm font-bold bg-[rgb(107,180,249)] text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Log In
            </button>
          </form>
          <div className="mx-10 mt-2 flex justify-center items-center">
            <span className="bg-gray-300 h-px flex-1"></span>
            <span className="p-2 uppercase text-sm text-gray-500 font-bold">or</span>
            <span className="bg-gray-300 h-px flex-1"></span>
          </div>
          <div className="mt-2 ms-10 flex justify-center items-center">
            <div className="">
              <AiFillFacebook color="#3b5998" size={30} />
            </div>
            <span className="text-md text-blue-900 font-semibold text-">Log in with Facebook</span>
          </div>
          <div className="text-center mt-1 mb-1">
            <a href="#" className="text-blue-900 text-xs no-underline  ">
              Forgot password?
            </a>
          </div>
        </div>
        <div className=" bg-white py-3 mt-2 border-2 border-gray-200 flex justify-center items-center">
          <span className="text-sm py-2">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 text-sm font-semibold no-underline">
              Sign up
            </a>
          </span>
        </div>
        <div className="max-w-sm min-w-sm text-center mt-1 flex justify-center items-center">
          <div>
            <span className="text-sm">Get the app.</span>
            <div className="flex justify-center items-center mt-2 gap-2">
              <div>
                <Image src="/images/ios.png" width={150} height={100} />
              </div>
              <div>
              <Image src="/images/android.png" width={150} height={100} />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm





