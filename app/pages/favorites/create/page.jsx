'use client'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useObject } from 'react-kuh'

import Link from 'next/link'
import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'

import Header from 'components/Header'
import Input from 'components/Input'

function saveAccount() {
  revalidate('POST /accounts')
}

export default function Create() {
  const router = useRouter()

  const [account, setAccount] = useObject({
    website: '',
    email: '',
    password: ''
  })

  // This is not automatic, this is a mutation
  useFetch('/accounts', {
    method: 'POST',
    body: { ...account, _id: undefined },
    onResolve() {
      router.back()
    }
  })

  return (
    <div>
      <Link href='/accounts' className='btn gap-x-2 btn-ghost'>
        <Icon name='arrow-left' className='text-xl' /> Back
      </Link>
      <Header>Add account</Header>
      <div className='flex flex-wrap w-full md:w-96 items-center justify-center space-y-2'>
        <div className='w-full'>
          <Input
            value={account.website}
            name='website'
            onChange={e =>
              setAccount.write({
                website: e.target.value
              })
            }
            placeholder='Website'
          />
        </div>
        <div className='w-full'>
          <Input
            value={account.email}
            name='email'
            onChange={e =>
              setAccount.write({
                email: e.target.value
              })
            }
            placeholder='Email'
          />
        </div>
        <div className='w-full'>
          <textarea
            placeholder='password'
            className='textarea textarea-bordered h-32 resize-none w-full'
            name='password'
            onChange={e =>
              setAccount.write({
                password: e.target.value
              })
            }
          ></textarea>
        </div>
        <div className='w-full text-center'>
          <button onClick={saveAccount} className='btn gap-x-2'>
            <span>Save</span>
            <Icon name='disc' className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}
