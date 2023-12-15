import { useState } from "react";

const AddASong = ({onAddASong}) => {
    const [newSong,setNewSong]=useState({
        title:"",
        album:"",
        artist:"",
        genre: "",
        releaseDate:""
       
    });

    const handleInputChange = async(e) =>{
        e.preventDefault();
        const{ name, value}= e,target;
        setNewSong({...newSong,[name]:value});
        const inputData ={
            title,album,artist,genre,releaseDate
        };
    };

    return ( 
        <form onSubmit={handleInputChange}>
            <h4>Add Song </h4>
            <div>
                <lable>Title</lable>
                <lable>Album</lable>
                <lable>Artis</lable>
                <lable>Genre</lable>
                <lable>ReleaseDate</lable>
                <div>Add Song</div>
               
            </div>


        </form>

     );
}
 
export default AddASong;