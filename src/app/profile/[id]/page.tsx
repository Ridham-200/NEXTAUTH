export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {/* <h1>Profile</h1> */}
            {/* <hr /> */}
           <h1>PROFILE PAGE</h1>
            <h2 className=" p-3  rounded bg-orange-500 text-black">{params.id}</h2>
            

            </div>
    )
}