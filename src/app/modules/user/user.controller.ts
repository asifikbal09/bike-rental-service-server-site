import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createUser=catchAsync((req,res)=>{
    const result = ''
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User registered successfully",
        data:result
    })
})

const UserControllers={
    createUser
}