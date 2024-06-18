import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { IAddCat } from '../../../../types/types';
import { addCat } from '../../../../features/cats/catsAPI';
import st from './useraddcat.module.scss'

const UserAddCat: React.FC = () => {
   const [selectedValue, setSelectedValue] = useState('');
   const { user } = useAppSelector((state) => state.signinStore)
   const dispatch = useAppDispatch()

   const handleSelectChange = (event: any) => {
      setSelectedValue(event.target.value);
   };

   const handleSubmit = () => {
      if (selectedValue !== '') {
         const obj: IAddCat = {
            uid: user?.id!,
            cat: +selectedValue
         }
         dispatch(addCat(JSON.stringify(obj)))
         setSelectedValue('')
         alert('Added')
      }
   }

   return (
      <div>
         <h3 className={st.cat__title}>Add category</h3>
         <div className={st.cat__form}>
            <select
               value={selectedValue}
               onChange={handleSelectChange}
               className={st.cat__select}
            >
               <option value="">Select a field</option>
               <option value="1">Astronomy</option>
               <option value="2">Astrophysics</option>
               <option value="3">Cosmology</option>
            </select>
            <button
               onClick={() => handleSubmit()}
               className={st.cat__btn}
            >
               Add
            </button>
         </div>
      </div>
   )
}

export default UserAddCat
