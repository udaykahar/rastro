import React from 'react'

const Form = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [message, setMessage] = React.useState('')

    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={data.name} onChange={handleChange} />
            <input type="email" name="email" value={data.email} onChange={handleChange} />
            <input type="text" name="phone" value={data.phone} onChange={handleChange} />
            <textarea name="message" value={data.message} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Form