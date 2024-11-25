import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'

const BlogDetail = ({blog}) => {
  return (
    <Mainlayout>
        <div className="w-full bg-background2">
                <div className="container mx-auto md:px-40 px-5 py-10 flex gap-5 items-center relative justify-center ">
                    <div className="flex flex-col items-start px-2 shadow-md  py-2 mt-16  bg-foreground justify-start">
                        
                        <div>
                        <img
                                src={"http://localhost:8000/storage/"+blog.image}
                                alt=""
                                className="w-full h-72 object-cover rounded-md"
                            />
                        </div>
                        <div className="flex items-center justify-between w-[32rem] px-2 mt-2 ">
                            
                            <h1 className="text-lg">{blog.title}</h1>
                        </div>
                        

                        <div className="flex items-center justify-between  px-2 mt-2 ">
                            <h1 className="text-sm">{blog.description}</h1>
                        </div>

                       

                       
                    </div>
                    
                    
                </div>
            </div>
    </Mainlayout>
  )
}

export default BlogDetail
