import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className='flex flec-col'>
      <p className='text-3xl font=bold text-indigo-500'>Hello discord clone</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
