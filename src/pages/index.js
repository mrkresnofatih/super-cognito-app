import HomeDashboard from '@/components/dashboards/HomeDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'

export default function Home() {
  return (
    <>
      <BaseHead pageName='Home' />
      <div>
        <SimpleHeader/>
        <HomeDashboard/>
      </div>
    </>
  )
}
