"use client"
import { getCookies } from '@/actions/getCookies'
import { toast } from '@/components/ui/use-toast'
import { CloudDownload, LoaderCircle } from 'lucide-react'
import React, { useState } from 'react'
import Markdown from 'react-markdown'

export default function GenerateReport() {
    const [pdf_file , setPdfFile] = useState<File| null>(null)
    const [data_file , setDataFile] = useState<File | null>(null)
    const [response, setResponse] = useState<string | null>(null)
    const [report , setReport] = useState<string | null>(null)
    const [loading , setLoading] = useState<boolean>(false)
    const onChangePdf = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const fileList = e.target.files as FileList
        setPdfFile(fileList[0])
    }
    const dataFileonChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            const fileList = e.target.files as FileList
            setDataFile(fileList[0])
    }
    const handleClick = async () => {
        const formdata = new FormData()
        
        if (pdf_file) {
            formdata.append("file" , pdf_file)
            const token = await getCookies("refresh_token")
            const response = await(await fetch(`https://ocr-ai-gycb6peqlq-uc.a.run.app/upload/`,{
                method:"POST",
                body:formdata,
                headers: {
                    'Authorization': `Bearer ${token?.value}`
                },
            })).json()
            console.log(response);
            setResponse(response)
        }else{
            console.log(pdf_file);
            toast({
                title: "Error",
                description: "Please Select PDf file",
                variant:"destructive"
              })
        }
    }
    const handleClickReport = async () => {
        const formdata = new FormData()
        if (pdf_file && data_file) {
            setLoading(true)
            formdata.append("pdf" , pdf_file)
            formdata.append("data_file", data_file)
            const token = await getCookies("refresh_token")
            console.log(token?.value);
            const response = await fetch(`https://ocr-ai-gycb6peqlq-uc.a.run.app/upload-review`,{
                method:"POST",
                headers: {
                    'Authorization': `Bearer ${token?.value}`
                },
                body:formdata
            })
            if (response.status == 500) {
                toast({
                    title: "Error",
                    description: "File are very large",
                    variant:"destructive"
                  })
            }
            const report = await response.json()
            console.log(report);
            setReport(report)
            setLoading(false)
        }else{
            console.log(pdf_file);
            console.log(data_file);
            toast({
                title: "Error",
                description: "Please Select Both Files",
                variant:"destructive"
              })
        }
    }
  return (
    <div className='w-full h-full overflow-x-hidden flex flex-col justify-center items-center px-4 py-6 gap-10'>
        <div className='p-5 w-60 border-dashed border-2 border-gray-300 flex  flex-col gap-6 justify-center items-center'>
            <div>
            <label htmlFor="pdf_file" className='flex flex-col gap-3 justify-center items-center'><CloudDownload size={100}/><span className='text-xl font-bold'>Select PDf file</span></label>
            <input type="file" hidden={true} multiple={false} accept='.pdf' id='pdf_file' onChange={onChangePdf}/>
            </div>
            <div>
            <label htmlFor="data_file" className='flex flex-col gap-3 justify-center items-center'><CloudDownload size={100}/><span className='text-xl font-bold'>Select Data file</span></label>
            <input type="file" hidden={true} multiple={false} accept='.csv' id='data_file' onChange={dataFileonChange}/>
            </div>
            <button onClick={handleClick} className='font-bold text-xl bg-yellow-300 p-5 rounded-lg'>Upload</button>
        </div>
        <div className='flex flex-col gap-3 w-full justify-center items-center'>
            <h5 className='font-bold text-sm lg:text-3xl text-center'>Optical character recognition</h5>
            <p className='text-xs md:text-base text-center w-80 lg:w-[50rem]'>{response}</p>
            {response?<button onClick={handleClickReport} className='text-white font-bold bg-yellow-300 p-5 rounded-xl'>{loading?<div className='flex gap-5'><LoaderCircle className='animate-spin'/><span>Genreting Report</span></div>:"Get Report"}</button>:null}
            {
                report?<Markdown className='font-bold text-center'>{report}</Markdown>:null
            }
        </div>
    </div>
  )
    }