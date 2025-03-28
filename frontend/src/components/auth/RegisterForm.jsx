import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            console.log(formData);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    };


  return (
    <Card className="w-96 max-w-md mx-auto overflow-hidden animate-in">
      <CardContent className="p-6">
        <form className='space-y-4' onSubmit={handleSubmit} >
            <div className='space-y-2'>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="h-12" />
            </div>

            <div className='space-y-2'>
                <Label htmlFor="email">Email</Label>
                <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12" />
            </div>

            <div className='space-y-2'>
                <Label htmlFor="password">Password</Label>
                <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-12" />
            </div>

            <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 mt-6"
          >
            {isLoading ? <CircularProgress size={24} /> : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default RegisterForm
