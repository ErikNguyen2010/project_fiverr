import React, { memo, useEffect, useRef, useState } from 'react'
import {useFormik} from 'formik'
import {
  DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Switch,
  } from 'antd';
import 'moment/locale/zh-cn';
import { useDispatch, useSelector } from 'react-redux';
import { editCongViec, editWorkImage, getWorkDetail } from '../../../redux/reducer/workReducer';

function EditImg(props) {
    const [imgSrc, setImgSrc] = useState('')
    const [componentSize, setComponentSize] = useState('default');
    const {workDetail} = useSelector(rootReducer => rootReducer.workReducer)
    const dispatch = useDispatch()
   useEffect(() =>{
    let {id} = props.match.params
    dispatch(getWorkDetail(id))
   },[])
    const formik = useFormik({
      enableReinitialize:true,
      initialValues:{
        _id: workDetail?._id,
        image: null,
      },
      onSubmit:(values) =>{
        // let formData = new FormData()
        // for(let key in values){
        //     if(key !== "image"){
        //         formData.append(key,values[key])
        //     }else{
        //       if(values.image !== null){
        //         formData.append("File", values.image, values.image.name)
        //       }
        //     }
        // }
        const action = editWorkImage(formik.values._id, values)
        dispatch(action)
      
      }
    })
    const handleChangeFile = async (e) =>{
        let file = e.target.files[0]
        if(file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg" || file.type === "image/git"){
          await formik.setFieldValue('image',file)
            let reader = new FileReader()
            reader.readAsDataURL(file);
            reader.onload = (e) =>{
                setImgSrc(e.target.result)

            }
        }
    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
      };
  return (
    
    <section className='editimg'>
    <h1 className='text-center mb-5' style={{fontSize: "30px", fontWeight:"bold", color:"black"}}>Edit Hình Ảnh</h1>
         <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            >
            
            <Form.Item label="Image">
                <input   type="file" accept='image/png,image/jpg,image/jpeg,image/git' onChange={handleChangeFile}/>
                <br/>
                <img style={{width: '150px', height:"150px"}} src={imgSrc==="" ? workDetail.image : imgSrc} alt="" />
            </Form.Item>
      <br />
            <Form.Item>
            <button style={{marginLeft:"30%"}} className='btn-add btn btn-success' type='submit'>Xác Nhận</button>

            </Form.Item>
        </Form>
</section>
  )
}

export default memo(EditImg)