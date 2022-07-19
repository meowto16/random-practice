import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

const HomePage: React.FC = () => {
  const { isLoading, isError, data, refetch } = useSearchUsersQuery('vladilen')

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <>
        <h1>There is something wrong</h1>
        <button onClick={refetch}>Reset</button>
      </>
    )
  }

  return (
    <div className="p-5">
      {data.items.map((item: any) => (
        <div className="flex justify-center" key={item.id} data-user={item.login}>
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mb-4">
            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                 src={item.avatar_url} alt=""/>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{item.login}</h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is
                a
                little bit longer.
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage