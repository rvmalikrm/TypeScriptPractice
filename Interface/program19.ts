//Create an interface for API response data

interface ApiResponse{
    status:string;
    message:string;
    success:boolean;
}

const response:ApiResponse={
    status:"200",
    message:"Data fetched successfully",
    success:true
}

console.log(response.status);
console.log(response.message);
console.log(response.success);
