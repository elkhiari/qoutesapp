import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'flowbite'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
function App() {
  const [islooding,setIsLooding] = useState(false)
  const [data,setData] = useState([
    {
        "quote": "I think the key to happiness is allowing ourselves to not feel bad or guilty for feeling it, and letting it be contagious. And to not be dependent on other people to create your own happiness.",
        "author": "Brittany Murphy",
        "category": "happiness"
    }
])
  useEffect(()=>{
    HandleClick()
  },[])
  const HandleClick = ()=>{
    setIsLooding(true)
    var config = {
      method: 'get',
    maxBodyLength: Infinity,
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 
        'X-Api-Key': 'WR8Ls7TL+RxE0JMl1l9Qpg==mNXMGJYqHtZGIFdv'
      },
    };
    
    axios(config)
    .then(function (response) {
      setData(response.data);
    setIsLooding(true)
    })
    .catch(function (error) {
      console.log(error);
    setIsLooding(false)
    });
  }
  return (
    <div className="App">
      <header className="App-header bg-gray-100">
        <div className='p-3  rounded flex place-content-center place-items-center'>
            
        {!islooding?<div className='italic font-medium max-w-screen-md mx-auto text-center   rounded p-10 shadow-md cursor-pointer active:bg-gray-50 bg-white text-black'>Looding...</div>:<figure data-popover-target="popover-top" data-popover-placement="top" className="max-w-screen-md mx-auto text-center   rounded p-10 shadow-md cursor-pointer active:bg-gray-50 bg-white" onClick={HandleClick}>
            <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <blockquote>
                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"{data && data[0].quote}"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">{data && data[0].author}</cite>
                    <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{data && data[0].category}</cite>
                </div>
            </figcaption>
        </figure>}
        <div data-popover id="popover-top" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 class="font-semibold text-gray-900 dark:text-white">Information</h3>
            </div>
            <div class="px-3 py-2">
                <p>Click me for generate Quotes</p>
            </div>
            <div data-popper-arrow></div>
        </div>

      <figcaption className="flex items-center justify-center mt-6 space-x-3 absolute bottom-2">
                <img class="w-6 h-6 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/steam-circlet-374115.appspot.com/o/images%2F%2B212%20684-149860%2020221010_225154.jpg?alt=media&token=89a8bd9a-bf70-439a-84d3-ef0fd8568ca6" alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">Othmane Elkhiari<elkhiari></elkhiari></cite>
                    <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"><a href="https://github.com/elkhiari">Github</a></cite>
                </div>
      </figcaption>
          </div>


          <div data-dial-init class="fixed top-6 right-6 group">
    <button type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <span class="sr-only">Open actions menu</span>
    </button>
    <div id="speed-dial-menu-top-right" class="flex flex-col items-center hidden mt-4 space-y-2">
        <button type="button" data-modal-target="crypto-modal" data-modal-toggle="crypto-modal"  data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg aria-hidden="true" class="w-6 h-6 -ml-px " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
            <span class="sr-only">Share</span>
        </button>
        <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Share
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>  
        <CopyToClipboard text={data[0].quote} onCopy={()=>alert('copied!')}>
        <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
            <span class="sr-only">Copy</span>
        </button>
        </CopyToClipboard>
        <div id="tooltip-copy" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Copy
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>


      </header>





<div id="crypto-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="crypto-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                <span class="sr-only">Close modal</span>
            </button>
            {/* <!-- Modal header --> */}
            <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    Share Quote
                </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6">
                <ul class="my-4 space-y-3">
                    <li>

                        <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                      <TwitterShareButton title={data[0].quote} via={data[0].author} related="elkhiari" hashtags={["qoute",data[0].author]} className="flex items-center">
                          <TwitterIcon className='rounded'></TwitterIcon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Twitter</span>
                            <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                      </TwitterShareButton>
                        </a>
                    </li>
          
                    <li>
                        <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <FacebookIcon className="rounded"></FacebookIcon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                      <WhatsappShareButton title={data[0].quote} url="https://www.facebook.com/elkhiari.othmane" className="flex items-center">
                            <WhatsappIcon className='rounded'></WhatsappIcon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Whatsapp</span>
                      </WhatsappShareButton>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <LinkedinIcon className='rounded'></LinkedinIcon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Linkedin</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>





    </div>
  );
}

export default App;
