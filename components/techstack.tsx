import Title from './ui/title'
import TechstackSide from './techstack/techstackSide'
import TechstackMain from './techstack/techstackMain'

export default function TechStack() {

  return (
    <section className="flex flex-col gap-4"> 
      <span className='title text-2xl sm:text-3xl'>
        <Title name={'tech.title'} level='h2'/>
      </span>
      <div className="flex flex-col sm:flex-row gap-6 min-h-[200px]">
        <TechstackSide />
        <TechstackMain />
      </div>
    </section>
  )
}