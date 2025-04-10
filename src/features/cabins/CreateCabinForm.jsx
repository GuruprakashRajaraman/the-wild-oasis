import { useForm } from "react-hook-form";
import {toast} from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import Spinner from "../../ui/Spinner";
import FormRow from "../../ui/FormRow";
import {  createEditCabin } from "../../services/apiCabins";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";



function CreateCabinForm({cabinToEdit ={} , onCloseModal}) {
  const {id:editId ,...editValue} = cabinToEdit;
  const isEditSession = Boolean(editId);
  const {register , handleSubmit , reset , getValues , formState} = useForm({
    defaultValues : isEditSession ? editValue : {},
  })

  const {errors}= formState;
  
  const {isCreating , createCabin} = useCreateCabin();
const {isEditing , editCabin} = useEditCabin();

  const isWorking = isCreating || isEditing;


  function onSubmit(data){
    
    const image = typeof data.image ==='string' ? data.image : data.image[0] ;
    const cabinData ={...data,image ,}

    if(isEditSession) {
      
      editCabin({newCabin : cabinData , id:editId},{
        onSuccess:(data)=>{
          reset();
          onCloseModal?.();
        }
      });
    }
    else createCabin(cabinData, {
      onSuccess:(data)=>reset(),
    });
  } 

  function onError(errors){
// console.log(errors)
  }
  if(isCreating) return <Spinner/>
  return (
    <Form onSubmit={handleSubmit(onSubmit , onError)}
    type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow label='Cabin name' error ={errors?.name?.message}>
        <Input disabled={isWorking} type="text" id="name" {...register ('name', {required:'This field is required'})} />
      </FormRow>
      <FormRow label='Maximum capacity' error ={errors?.maxCapacity?.message}>
        <Input disabled={isWorking} type="number" id="maxCapacity" {...register ('maxCapacity', {
          required:'This field is required', 
          min:{
            value : 1,
            message : 'Capacity should be alteast 1'
        }})}/>
      </FormRow>

      <FormRow label='Regular price' error ={errors?.regularPrice?.message}>
        <Input disabled={isWorking} type="number" id="regularPrice" {...register('regularPrice', {
          required:'This field is required',
          min:{
            value : 1,
            message : 'Capacity should be alteast 1'
        }})}/>
      </FormRow>

      <FormRow label='Discount' error ={errors?.discount?.message}>
        <Input disabled={isWorking} type="number" id="discount" defaultValue={0} {...register('discount', {
          required:'This field is required',
          validate: (value)=> value <= getValues().regularPrice ||'Discount should be less than regular price'
          })}/>
      </FormRow>

      <FormRow label='Description for website' error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" {...register('description', {required:'This field is required'})} />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
         id="image" 
         accept="image/*"
         {...register('image', {required: isEditSession ? false : 'This field is required'})}
          />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick ={()=>onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession? 'Edit Cabin' :'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
