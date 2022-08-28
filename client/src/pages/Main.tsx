import { GiWorld } from 'react-icons/gi';

export const Main:React.FunctionComponent = ()=>{
    return (<>
        <section className='flex flex-col items-center justify-center bg-sky-50'>
            <GiWorld />
            <p>You can create your scheduled tasks</p>
            <p>Share your tasks progress with your friends in chat</p>
        </section>
        <div className='w-full flex'>
            <section className='w-2/4 bg-sky-300'>
                <p>Completed tasks</p>
                <p>Not completed tasks</p>
            </section>
            <section className='w-2/4 bg-amber-100'>
                Chat statistics
            </section>
        </div>
    </>)
}