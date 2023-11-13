import { Flex, Heading, Text } from '@chakra-ui/layout'
import {
   Button,
   FormControl,
   FormLabel,
   Input,
   Textarea
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
      recaptchaValue: '' // Store the reCAPTCHA response
   })

   const [isSent, setIsSent] = useState(false)
   const [errors, setErrors] = useState<{ [key: string]: string }>({})

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      const validationErrors: { [key: string]: string } = {}

      // Validation: Check if fields are empty
      for (const key in formData) {
         if ((formData as Record<string, string>)[key].trim() === '') {
            validationErrors[key] = `${key} is required`
         }
      }

      // Validation: Check email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
         validationErrors.email = 'Invalid email format'
      }

      if (Object.keys(validationErrors).length > 0) {
         // If there are validation errors, set them and prevent form submission
         setErrors(validationErrors)
         return
      }

      // Check if reCAPTCHA is filled
      if (!formData.recaptchaValue) {
         console.error('Please complete the reCAPTCHA challenge.')
         return
      }

      try {
         await axios.post('/send-email', formData)
         setIsSent(true)
      } catch (error) {
         console.error(error)
      }
   }

   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value
      })
   }

   // const handleRecaptchaChange = (value: string) => {
   //    setFormData({
   //       ...formData,
   //       recaptchaValue: value
   //    })
   // }

   return (
      <div>
         {isSent ? (
            <Text>Email sent successfully!</Text>
         ) : (
            <Flex
               w="100vw"
               h="100vh"
               direction={['column', 'row']}
               justifyItems={'center'}
               alignItems={'center'}
            >
               <Flex
                  p="30px"
                  justifyContent={['flex-start', 'flex-start']}
                  alignContent={['flex-start', 'flex-start']}
                  flex={['1', '0.5', '0.6', '1.5']}
                  h="100vh"
                  bg={['', 'pink']}
               >
                  <Heading>Get in touch</Heading>
               </Flex>
               <form onSubmit={handleSubmit}>
                  <FormControl>
                     <Flex
                        direction={'column'}
                        flex={['1', '1', '1', '1.5']}
                        w="350px"
                        mx={['0', '30px', '50px', '100px', '100px']}
                     >
                        <div>
                           <FormLabel htmlFor="name">Name</FormLabel>

                           <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              size="md"
                              mb={['10px', '0px']}
                              mr={['0px', '10px']}
                           />
                           {errors.name && (
                              <p className="error">{errors.name}</p>
                           )}
                        </div>

                        <FormLabel htmlFor="subject">Email</FormLabel>
                        <Input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           required
                           mb={['10px', '0px']}
                        />

                        <FormLabel htmlFor="subject">Subject:</FormLabel>
                        <Input
                           type="text"
                           id="subject"
                           name="subject"
                           value={formData.subject}
                           onChange={handleInputChange}
                           required
                        />

                        <FormLabel htmlFor="message">Message:</FormLabel>

                        <Textarea
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           required
                           placeholder="Write your message here..."
                        />
                        {/* <div
                        className="g-recaptcha"
                        data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
                        data-callback={handleRecaptchaChange}
                     ></div> */}

                        <Button
                           colorScheme="teal"
                           size="md"
                           type="submit"
                           borderRadius="15px"
                           mt="20px"
                           display={'flex'}
                           alignSelf="center"
                        >
                           Submit
                        </Button>
                     </Flex>
                  </FormControl>
               </form>
            </Flex>
         )}
      </div>
   )
}

export default Contact
