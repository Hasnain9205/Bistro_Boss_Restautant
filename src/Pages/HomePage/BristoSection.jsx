import bristoImg from '../../../src/assets/home/chef-service.jpg'
export default function BristoSection() {
  return (
    <div className='mt-20 relative'>
        <div className='w-[740px] h-60 bg-white absolute left-20 top-14'>
            <h1 className='text-4xl font-normal text-center py-4 pt-12'>Bistro Boss</h1>
            <p className='text-center pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
      <img className='h-[360px]' src={bristoImg} alt="" />
    </div>
  )
}
