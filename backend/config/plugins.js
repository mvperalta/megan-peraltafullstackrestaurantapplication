module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AWAKIAZZRXLGQI3QBOK756',
        secretAccessKey: '6a0G+xWxwlySeJnWe3ReyaTEEDXc0SkhYZ5P7FrcKEY',
        region: 'us-east-2',
        params: {
          Bucket: 'myrestaurantimagesbucket',
        },
      },
    },
  });
  