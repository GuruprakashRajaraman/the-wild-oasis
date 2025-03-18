import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apICabins";
import toast from "react-hot-toast";

export function useEditCabin(){
    const queryClient = useQueryClient()

    const {mutate:editCabin , isLoading: isEditing}= useMutation({
        mutationFn :({newCabin , id})=> createEditCabin(newCabin,id),
        onSuccess:()=>{ 
          toast.success('Cabin successfully edited');
          queryClient.invalidateQueries({
           queryKey:['cabins']
          });
    
        },
        onError:(err)=>toast.error(err.message)
      })
      return{editCabin , isEditing}
}