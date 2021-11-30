$('#add-new-text').click(function() {
    const $textInput = $('#bla-bla');
    $textInput
        .removeClass('border')
        .removeClass('border-danger');

    if ($textInput.val() == '') {
        $textInput
            .addClass('border')
            .addClass('border-danger');
        return false;
    }

    const newText = `<li class="list-group-item">${$textInput.val()}</li>`;
    $('#chat-box-text').append(newText);
    $textInput.val('');
});

$('#add-new-text').click(function() {
    const $userInput = $('#user-name');
    $userInput
        .removeClass('border')
        .removeClass('border-danger');

    if ($userInput.val() == '') {
        $userInput
            .addClass('border')
            .addClass('border-danger');
        return false;
    }

    const newUser = `<li class="list-group-item">${$userInput.val()}:</li>`;
    $('#chat-box-name').append(newUser);
    $userInput.val('');
});




