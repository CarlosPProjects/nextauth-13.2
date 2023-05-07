import { FC } from 'react'

interface Props {

}

const UserPost: FC<Props> = ({}) => {
  return (
    <div>Only Authenticated user should access to this section</div>
  )
}

export default UserPost