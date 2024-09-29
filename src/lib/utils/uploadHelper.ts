export const uploadFile = async (files: File[], type: string): Promise<string[]> => {
    const images: string[] = []
  
    for (const file of files) {
      const formData = new FormData()
  
      formData.append('file', file)
  
      if (type === 'avatar') {
        formData.append('upload_preset', 'erszbrb2')
      } else if (type === 'cv') {
        formData.append('upload_preset', 'k6kmr9vg')
      } else if (type === 'category') {
        formData.append('upload_preset', 'gmlca55a')
      } else {
        formData.append('upload_preset', '')
      }
  
      formData.append('cloud_name', 'dpef9sjqt')
  
      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dpef9sjqt/upload', {
          method: 'POST',
          body: formData
        })
  
        const data = await res.json()
  
        images.push(data.secure_url)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log('Upload error:', err.message)
        } else {
          console.log('Unknown error:', err)
        }
      }
    }
  
    return images
  }
  