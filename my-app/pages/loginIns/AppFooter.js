import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';


const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Japanese',
    'Korean',
    'Portuguese',
    'Russian',
    'Turkish',
  ];
  
const AppFooter = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

   const handleLanguageChange = async (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);

    try {
      const translation = await translate('Hello, world!', { to: lang });
      console.log(translation.text);
      // İşlenen çeviri metnini kullanarak gerekli alanları güncelleyin
    } catch (error) {
      console.log('Çeviri hatası:', error);
    }
  };
    return (
        <div className="h-full w-full flex justify-center items-top ">
        <div className="max-w-6xl  px-20   items-top">
          <div className="flex justify-between items-center">
            <ul className="flex  flex-wrap gap-6 text-xs justify-center items-center text-center">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Meta</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">About</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Blog</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Jobs</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Help</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">API</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Terms</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Top Accounts</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Locations</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Instagram Lite</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact Uploading & Non-Users</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Meta Verified</li>

            </ul>
            
          </div>
          <div className=' flex justify-center items-center mt-5'>
          <div className="relative text-xs text-gray-600">
              <Form.Select  style={{border: 'none', backgroundColor: 'transparent'}}>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </Form.Select>
              
            </div>
            <div className="text-center ps-5 md:ps-2 text-xs">
            <span className="text-xs text-gray-600">© 2023 Instagram from Meta</span>
          </div>
          </div>
        </div>
      </div>
  )
}

export default AppFooter