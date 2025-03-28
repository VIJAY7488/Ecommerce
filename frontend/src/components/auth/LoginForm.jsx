import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Eye, EyeOff } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { data, useNavigate } from 'react-router-dom';
import { userLogin } from '@/store/auth-slice';
import { toast } from 'react-toastify';

const LoginForm = () => {
 
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const data = await dispatch(userLogin(formData));

            if(data?.payload?.success){
                navigate('/');
                setFormData({email: "", password: ""});
                toast.success(data?.payload?.message)
            }
        } catch (error) {
           console.log(error); 
        }finally{
            setIsLoading(false);
        }
    };

  return (
    <Card>
      <CardContent>
      <form className='space-y-4' onSubmit={handleSubmit} >

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
                <div className='relative'>
                <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-12" />

<button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
                </div>
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

export default LoginForm
