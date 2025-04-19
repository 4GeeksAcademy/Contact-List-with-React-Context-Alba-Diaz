
const contactServices = {}


contactServices.getOneAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug);
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error);

    }

}
contactServices.createNewContact = async (slug, formData) => {

    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await resp.json()
        console.log(data);
         
    } catch (error) {
        console.log(error);
    }
}

contactServices.deleteContact = async (slug, id) => {

    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug + '/contacts/'+ id, {
            method: 'DELETE'
        });
        if (!resp.ok) throw new Error('Deleting error') 
            return contactServices.getOneAgenda(slug)
    } catch (error) {
        console.log(error);
    }
}

contactServices.editContact = async (slug, id, formData) => {
        try {
            const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/'+ id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!resp.ok) throw new Error('Editing error')
            return contactServices.getOneAgenda(slug)
            
        } catch (error) {
            console.log(error);
        }
    }

export default contactServices