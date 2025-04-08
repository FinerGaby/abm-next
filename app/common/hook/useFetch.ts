import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([])

  const fetchData = async () => {
    const res = await fetch(url)
    const json = await res.json()
    setData(json)
  }

  const addItem = async (item: Partial<T>) => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    fetchData()
  }

  const deleteItem = async (id: number | string) => {
    await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    fetchData()
  }

  const updateItem = async (id: number | string, item: Partial<T>) => {
    await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return {
    data,
    fetchData,
    addItem,
    deleteItem,
    updateItem
  }
}
