import React from 'react'
import Card from '../../components/Card'

function AIInsightsCard({insight}) {
  return (
    <Card className='md:col-span-12 p-10'>
      <h3 className='text-lg mb-2'>AI Insights</h3>
        <div className='border-s-4 p-6 border rounded-e-sm'>
          {insight}
        </div>
    </Card>
  )
}

export default AIInsightsCard