test('test toBe', () => {
    const yadi  = "yadi";
    const hello = `Hello ${yadi}`;

    expect(hello).toBe('Hello yadi');
});


test('test toEqual', () => { 
    let person  = {id: 1};
    Object.assign(person, {name: "babeh"});

    expect(person).toEqual({id: 1, name: "babeh"});
});