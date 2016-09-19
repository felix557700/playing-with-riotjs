describe('hello.tag', function () {
	var tag;

	beforeEach(function () {
		document.body.innerHTML = '<hello></hello>';
		tag = riot.mount('hello')[0];
	});

	afterEach(function () {
		tag.unmount();
	});

	it('should initialize tag successfully', function () {
		expect(tag).to.exist;
		expect(tag.message).to.be.eq('Hello, Riot:');
		expect(tag.people).to.have.lengthOf(3);
	});

	it('should add people to array successfully', function () {
		tag.person.value = 'Test Person';
		expect(tag.people).to.have.lengthOf(3);

		tag.addPeople();
		expect(tag.people).to.have.lengthOf(4);
	});

	it('should remove people from array successfully', function () {
		var mockedItem = {item: {name: 'Filip', i: 0}};
		expect(tag.people).to.have.lengthOf(3);

		tag.removePeople(mockedItem);
		expect(tag.people).to.have.lengthOf(2);
		expect(tag.people).to.include({name: 'Marko'});
		expect(tag.people).to.include({name: 'Vuk'});
		expect(tag.people).to.not.include({name: 'Filip'});
	});
});