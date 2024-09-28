import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Menu from './menu';

interface PageProps {
  children?: ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header className='h-20'/>
        <div className='flex flex-1 boxed'>
          <Menu className='w-72'/>
          <main className='bg-red-500 flex-1'>
            {props.children}
          </main>
        </div>
      <Footer className='h-14'/>
    </div>
  )
}