## Here goes the steps followed to create this project
# Create project using -- npm create vite@latest
# Install dependencies
  install following dependencies
  @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
# Setup Environment Variable
  Define variable --VITE_APPWRITE_VARIABLENAME
  Access Variable-- import.meta.env.VITE_APPWRITE_VARIABLENAME
# Created class For appwrite services
  Created a AuthService class with method to
  -createAccount
  -login
  -logout
  -getAccount
# Created class to provides configuration services
  created class to provide services like-
  updatePost,DeletePost,getPost,createFile,deleteFile,getFilePreview
# Configured store
   Created AuthSlice with login & logout reducer
# Created Components
  -created header with conditional logout button rendering
  -created input field using forward reference 
  -created Login ,SignUp using react hook form
  -created reusable components like postCard,input ,select,button
  -Added authentication layout for authenticated rendering
