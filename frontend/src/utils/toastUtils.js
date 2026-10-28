import {toast} from 'react-toastify';

export const showSucess=(message)=>{
    toast.success(message,{
        position:"top-center",
        autoClose:3000,
        theme: "colored",
        hideProgressBar:false,
    })
};
export const showError=(message)=>{
    toast.error(message,{
        position:"top-center",
        autoClose:3000,
        theme: "colored",
        hideProgressBar:false,
    })
}

export const showWarn=(message)=>{
    toast.warn(message,{
        position:"top-center",
        autoClose:3000,
        theme: "colored",
        hideProgressBar:false,
    })
}

export const showInfo = (message) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
      hideProgressBar: true,
    });
  };