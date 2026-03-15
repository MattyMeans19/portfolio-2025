'use client';

import { AddToDo, DeleteToDo } from "@/app/(Admin)/actions";
import { ToDoItem } from "@/lib/definitions";

interface ToDoList {
    list: ToDoItem[]
}
export default function ToDoList(props: ToDoList){

    async function DeleteClicked(id: number){
        const request = await DeleteToDo(id);
        if(request.success){
            alert(request.message);
            window.location.reload()
        } else{
            alert(request.message)
        }
    }

    async function hanldeAdd(title: string, info: string){
        const request = await AddToDo(title, info);

        if(request.success){
            alert(request.message)
            window.location.reload()
        } else{
           alert(request.message) 
        }
    }

    return(
        <div className="grow col-start-1 flex flex-col gap-5 border-5 border-double px-15">
            <h1 className="text-center text-6xl underline">To Do</h1>
            <div className="grow h-full overflow-y-scroll">
                <ul className="pl-8 text-2xl">
                    {props.list.map((item) => (
                        <ul key={item.id}>
                            <strong className="underline">{item.title}: </strong> {item.info}
                            <button className="ml-5" onClick={() => DeleteClicked(item.id)}>🗑️</button>
                        </ul>
                    ))}
                    {props.list.length === 0 &&
                        <li>
                            <p>Nothing for now</p>
                        </li>
                    }
                </ul>                
            </div>
            <div className="flex flex-nowrap gap-5 mb-5">
                <input type="text" autoComplete="off" id="name" className="border px-2" placeholder="To Do Title"/>
                <textarea id="info" className="border px-2 w-full" placeholder="To Do Info"/>
                <button className="rounded-2xl bg-(--secondary) text-2xl w-fit px-10"
                    onClick={() => {
                        const newTitle = document.getElementById("name") as HTMLInputElement;
                        const newInfo = document.getElementById("info") as HTMLInputElement;

                        hanldeAdd(newTitle.value, newInfo.value);
                    }}>
                    Save
                </button>             
            </div>

        </div>
    )
}