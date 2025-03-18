import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin(){
    const queryCilent = useQueryClient();

 
    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
      mutationFn: (id) => deleteCabinApi(id),
      onSuccess: () => {
        toast.success(` successfully deleted`);
        queryCilent.invalidateQueries({
          queryKey: ["cabins"],
        });
      },
      onError: (err) => toast.error(err.message),
    });

    return{isDeleting , deleteCabin}
}
