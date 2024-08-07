import React, { useState } from 'react';
import style from '../styles/home.module.css';
import axios from 'axios';

const Home = () => {
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [immigrationType, setImmigrationType] = useState('');

  // row 1
  const getConsultant = async (id) => {
    axios.get(`http://localhost:8090/api/consultant/${id}`)
      .then(response => {
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCustomer = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/customer/${id}`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getDocument = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/document/${id}`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  //row2
  const getCustomerDocument = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/customer/${id}/documents`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const getAllConsultants = async () => {
    axios.get('http://localhost:8090/api/consultants')
      .then(response => {
        const consultants = response.data;
        alert(JSON.stringify(response.data, null, 2))
      })
      .catch(error => {
        console.error(error);
      });
  }

  const getVisasByStatus = async (status) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/visas/status/${status}`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  //row 3
  const getVisasByImmigrationType = async (immigrationType) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/visas/immigrationType/${immigrationType}`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getVisasByCountryID = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/visas/country/${id}`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getCustomersByPaymentStatus = async (Status) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/customers/paymentStatus/${Status}`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  //row 4
  const getCustomersByCountryID = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/customers/country/${id}/`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getCustomersByConsultantID = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/customers/consultant/${id}/`);
      alert(JSON.stringify(response.data, null, 2))
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getCustomersByImmigrationType = async (immigrationType) => {
    try {
      const response = await axios.get(`http://localhost:8090/api/customers/immigrationType/${immigrationType}`);

      alert(JSON.stringify(response.data, null, 2))

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-center' >

      {/* cards row 1*/}
      <div className={style['parentContainer']}>

        {/* 1 get Consultant */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشاور </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> کد ملی مشاور را وارد کنید. </h2>\
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="کد ملی "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getConsultant(id)}>
              ارسال
            </button>

          </div>
        </div>

        {/* 2 get customer */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> کد ملی مشتری را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="کد ملی "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getCustomer(id)}>
              ارسال
            </button>

          </div>
        </div>

        {/* 3 get Document */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مدرک </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه مدرک را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" شناسه مدرک "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getDocument(id)}>
              ارسال
            </button>
          </div>
        </div>

      </div>

      {/* cards row 2 */}
      <div className={style['parentContainer']}>

        {/* 4 get customer document */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مدرک یک مشتری </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> کد ملی مشتری را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="کد ملی "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getCustomerDocument(id)}>
              ارسال
            </button>
          </div>
        </div>

        {/* 5 get all Consultants */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> دریافت لیست مشاوران </h3>
            <div className='my-7'></div>
            <h2 className='mt-2'> برای دریافت لیست مشاوران کلیک کنید. </h2>
            <div className='my-7'></div>
            <button className={style.week} onClick={getAllConsultants}>
              دریافت
            </button>
          </div>

        </div>

        {/* 6 get visa by status */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> فیلتر ویزا بر اساس وضعیت </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> وضعیت مورد نظر را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" وضعیت "
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getVisasByStatus(status)}>
              ارسال
            </button>
          </div>
        </div>

      </div>

      {/* cards 3 */}
      <div className={style['parentContainer']}>

        {/* 7 get visa by immigration type */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> فیلتر ویزا بر اساس روش مهاجرتی  </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> روش مهاجرتی  مورد نظر را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" روش مهاجرتی "
              onChange={(e) => setImmigrationType(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getVisasByImmigrationType(immigrationType)}>
              ارسال
            </button>

          </div>
        </div>

        {/* 8 get visa by Country id */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> دریافت ویزا بر اساس کشور  </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه کشور  مورد نظر را وارد کنید. </h2>
            <div className='my-3'></div>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder=" شناسه کشور "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-4'></div>
            <button className={style.week} onClick={() => getVisasByCountryID(id)}>
              ارسال
            </button>
          </div>
        </div>

        {/* 9 get customer by payment status */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس وضعیت پرداخت </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> وضعیت پرداخت را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="وضعیت پرداخت "
              // value={id}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getCustomersByPaymentStatus(status)}>
              ارسال
            </button>

          </div>
        </div>

      </div>

      {/* cards 4 */}
      <div className={style['parentContainer']}>

        {/* 10 get Customers By Country ID */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس کشور </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه کشور را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="شناسه کشور "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getCustomersByCountryID(id)}>
              ارسال
            </button>

          </div>
        </div>

        {/* 11 get Customers By Consultant ID */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس  مشاور </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'> شناسه مشاور را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="شناسه مشاور "
              onChange={(e) => setId(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getCustomersByConsultantID(id)}>
              ارسال
            </button>

          </div>
        </div>

        {/* 12 get Customers By Immigration Type */}
        <div className={style['weekly-menu-card']}>
          <div className={`${style['new-food-item-container']}`}>
            <h3 className={style.h33}> جست و جو مشتری بر اساس  روش مهاجرتی </h3>
            <hr style={{ border: '0.5px solid #bdbdbd', width: '15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <h2 className='mt-2'>  روش مهاجرتی را وارد کنید. </h2>
            <input
              type="text"
              name="name"
              className={style.weekinput}
              placeholder="روش مهاجرتی "
              onChange={(e) => setImmigrationType(e.target.value)}
            />
            <div className='my-3'></div>
            <button className={style.week} onClick={() => getCustomersByImmigrationType(immigrationType)}>
              ارسال
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Home; 