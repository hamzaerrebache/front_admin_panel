export interface CustomFormData extends FormData {
     entries(): IterableIterator<[string, FormDataEntryValue]>; 
    }