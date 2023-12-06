import Form from 'react-bootstrap/Form';

export function create_brands_checkboxes(brands, handleChange, setFilter){
    let arr = [];
    for(let idx in brands){
        let brand = brands[idx];
        arr.push(
            <Form.Check
                type='checkbox'
                name={brand}
                onChange={event => handleChange('Brand',event,setFilter)}
                label={brand}
            />
        );
    }
    return arr;
}

export function handleChange(component, event, setFilter){
    const target = event.target;
    if(component === 'Capacity')
        setFilter(prevState => ({...prevState, 'Capacity': target.value==="Select Capacity"? null : target.value}));
    else
        setFilter(prevState => ({
            ...prevState,
            [component]:{
                ...prevState[[component]],
                [target.name]: target.checked
            }
        }));
}

export function handleSubmit(event, filter, setGlobalFilter){
    event.preventDefault();
    let name = event.target.Name.value;
    setGlobalFilter({
        ...filter,
        'Name': name
    });
}

export function handleReset(setFilter){
    setFilter(prevState => clearFilter(prevState));
}

export function clearFilter(filter){
    let clearedFilter = {};
    for(let key in filter){
        if(!filter[key])
            clearedFilter[key] = filter[key];
        else if(typeof filter[key] === 'object'){
            clearedFilter[key] = {};
            for(let i in filter[key])
                clearedFilter[key][i] = false;
        }
        else
            clearedFilter[key] = null;
    }
    return clearedFilter;
}

export function filterIsEmpty(filter){
    for(let key in filter){
        if(filter[key] !== null && typeof filter[key] === 'object'){
            for(let i in filter[key])
                if(filter[key][i])
                    return false;
        }
        else if(filter[key])
            return false;
    }
    return true;
}

export function displayFilterParams(filter){
    const displayItems = [];
    for (const [category, values] of Object.entries(filter)) {
        if (values && (typeof values === 'object' ? Object.values(values).some(value => value) : values)) {
            const filteredValues = typeof values === 'object' ? Object.keys(values).filter(key => values[key]) : [values];

            displayItems.push(
                <div key={category}>
                    <strong> {category}: </strong> {filteredValues.join(', ')}
                </div>
            );
        }
    }
    return displayItems;
}
