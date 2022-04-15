package myapp

class Usuario {
    String email;
    String password;
    String name;
    String lastName;
    String gender;
    Date birthDate;

    static constraints = {
        email(unique:true,nullable:false,blank:false,email:true)
        password(nullable:false,blank:false,password:true)
        lastName(nullable:false, blank:false)
        lastName(nullable:false, blank:false)
        gender inList: ['F','M']
        birthDate(nullable:false,blank:false)    
    }

    static mapping={
        table 'users'
        email column: 'email'
        password column: 'password'
        name column: 'name'
        lastName column: 'lastName' 
        gender column: 'gender'
        birthDate column: 'birthDate'
    }
}
