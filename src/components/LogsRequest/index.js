import React from 'react'
import { Table } from './table'
import '../../stylesheets/logsRequest.css'
import { TabSelector } from './tabSelector'

export const LogsRequest = () => {
  return (
    <div>
      <div className="mt-5" style={{ color: '#dfdee0' }}>
        Logs & Requests
      </div>
      <TabSelector />
      <div className="table-wrapper rounded">
        <Table />
      </div>
    </div>
  )
}
